import { useNavigate } from "react-router-dom";

function ThankYouPage() {
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #d87028 0%, #8b6f47 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            <div className="card shadow-lg" style={{
              borderRadius: '20px',
              border: 'none'
            }}>
              <div className="card-body p-4 p-md-5 text-center">
                {/* Logo Section */}
                <div className="mb-4">
                  <img src="./images/imaralogo.png" alt="imara-logo" className="img-fluid" style={{width: '230px'}} />
                </div>

                <h1 className="mb-4" style={{
                  color: '#d87028',
                  fontWeight: 'bold',
                  fontSize: 'clamp(2rem, 5vw, 3rem)'
                }}>
                  Thank you!
                </h1>

                <p className="mb-4 px-md-3" style={{
                  color: '#2c2c2c',
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  lineHeight: '1.6'
                }}>
                  Thank you for your request! Our team is excited to turn your dream vacation into reality. We'll be in touch shortly to start creating your unforgettable Tanzania adventure!
                </p>

                <button
                  className="btn btn-lg btn-theme"
                  style={{
                    backgroundColor: '#d87028',
                    color: 'white',
                    border: 'none',
                    padding: '12px 40px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    letterSpacing: '0.5px',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => navigate('/')}
                >
                  BACK TO HOMEPAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;