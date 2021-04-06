import { LeftPanel } from '../../components/LeftPanel/leftpanel'
import { SigninRightPanel } from '../../components/SigninRightPanel/signinrightpanel'
import './signin.css';

/**
 * Signin UI component
 */
const Signin = () => {
  return (
      <div className="full-widget">
        <div className="leftpanel-width">
          <LeftPanel />
        </div>
        <div className="rightpanel-width">
          <SigninRightPanel />
        </div>
      </div>
    )
}
    
export default Signin;
              