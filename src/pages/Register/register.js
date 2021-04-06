import { LeftPanel } from '../../components/LeftPanel/leftpanel'
import { RegisterRightPanel } from '../../components/RegisterRightPanel/registerrightpanel'
import './register.css';

/**
 * Register UI component
 */
const Register = () => {
  return (
      <div className="full-widget">
        <div className="leftpanel-width">
          <LeftPanel />
        </div>
        <div className="rightpanel-width">
          <RegisterRightPanel />
        </div>
      </div>
    )
}
    
export default Register;
              