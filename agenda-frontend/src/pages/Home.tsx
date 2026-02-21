import { useEffect, useRef } from "react"
import { Toast } from "bootstrap"

function Home() {
  const logoutToastRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sessionStorage.getItem("logout") === "true") {
      if (logoutToastRef.current) {
        new Toast(logoutToastRef.current).show()
      }
      sessionStorage.removeItem("logout")
    }
  }, [])

  return (
    <>
      {/* Toast logout */}
      <div
        className="toast-container position-fixed top-0 end-0 p-3"
        style={{ zIndex: 1080 }}
      >
        <div
          ref={logoutToastRef}
          id="logoutToast"
          className="toast text-bg-success"
          role="alert"
        >
          <div className="toast-body">Déconnexion réussie.</div>
        </div>
      </div>

      {/* Contenu */}
      <div className="text-center">
        <h1>Bienvenue sur Mini Réseau Social</h1>
        <p className="lead">
          Une plateforme sociale avec agenda collaboratif intégré.
        </p>
      </div>
    </>
  )
}

export default Home
