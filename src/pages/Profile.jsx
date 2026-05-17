import { FiUser } from 'react-icons/fi'

function Profile() {
  return (
    <div className="page fade-in">
      <section className="page-heading">
        <div>
          <p className="eyebrow">Project details</p>
          <h1>Profile</h1>
        </div>
      </section>

      <section className="profile-panel">
        <div className="card profile-card">
          <div className="profile-avatar">
            <FiUser />
          </div>
          <h2>Anmol Srivastav</h2>
          <p>Student developer building clean and useful finance tools with React.</p>
        </div>
      </section>
    </div>
  )
}

export default Profile
