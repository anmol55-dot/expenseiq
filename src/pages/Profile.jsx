import { FiCode, FiDatabase, FiUser } from 'react-icons/fi'

function Profile() {
  return (
    <div className="page fade-in">
      <section className="page-heading">
        <div>
          <p className="eyebrow">Project details</p>
          <h1>Profile & About</h1>
        </div>
      </section>

      <section className="profile-grid">
        <div className="card profile-card">
          <div className="profile-avatar">
            <FiUser />
          </div>
          <h2>Anmol Srivastav</h2>
          <p>Student developer building clean and useful finance tools with React.</p>
        </div>

        <div className="card about-card">
          <div className="section-title">
            <h3>About ExpenseIQ</h3>
            <p>A frontend-only personal expense dashboard</p>
          </div>

          <div className="about-list">
            <div>
              <FiCode />
              <span>Built with React JS, React Router, CSS, Recharts, and React Icons.</span>
            </div>
            <div>
              <FiDatabase />
              <span>All expenses, budget, and theme settings are saved in localStorage.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
