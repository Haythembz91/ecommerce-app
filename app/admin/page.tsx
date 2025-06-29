import DashboardForm from '@/components/DashboardForm'
export default function Home() {

  return (
      <main>
        <aside className={'col-3'}>
          <nav className="nav flex-column bg-body-secondary">
              <button className={'nav-link text-dark border-bottom fw-bold'} type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  Products
              </button>
              <div className="collapse flex-column border-bottom" id="collapseExample">
                  <DashboardForm></DashboardForm>
                  <button className={'nav-link text-dark mx-auto'}>Products List</button>
              </div>
              <button className={'nav-link text-dark border-bottom fw-bold'}>Users</button>
              <button className={'nav-link text-dark border-bottom fw-bold'}>Purchases</button>
          </nav>
        </aside>
        <div className={'col-9'}>

        </div>
      </main>
  )
}