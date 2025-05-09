import { auth } from '@clerk/nextjs/server'

export default async function Home() {
  const { userId } = await auth.protect({ permission: 'org:dashboard:admin' })

  return (
      <form className="needs-validation m-2 p-2 w-50">
          <div className="mb-3">
              <label htmlFor="basic-url" className="form-label">Product Name: </label>
              <div className="input-group">
                  <input type="text" className="form-control" id="basic-url"
                         aria-describedby="basic-addon3 basic-addon4"/>
              </div>
          </div>
          <div className="mb-3">
              <button className="btn btn-primary" type="submit">Submit form</button>
          </div>
      </form>
  )
}