import { redirect } from 'next/navigation'
import {stripe} from "@/scripts/stripe"
import ClearCart from "@/utils/ClearCart"
export default async function Success({ searchParams }:{searchParams:Promise<{session_id:string}>}) {
    const { session_id } = await searchParams
    if (!session_id)
        throw new Error('Please provide a valid session_id (`cs_test_...`)')

    const session = await stripe.checkout.sessions.retrieve(session_id,{
        expand: ['line_items', 'payment_intent']
    })
    const {
        status,
        customer_details
    } = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    })
    const customerEmail = customer_details?.email??null

    if (status === 'open') {
        return redirect('/')
    }

    if (status === 'complete') {
        return (
            <section className={'container-fluid'} id="success">
                <ClearCart></ClearCart>
                <p>
                    We appreciate your business! A confirmation email will be sent to{' '}
                    {customerEmail}. If you have any questions, please email{' '}
                </p>
                <a href="mailto:orders@example.com">orders@example.com</a>.
            </section>
        )
    }
}