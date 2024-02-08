import { BackTop } from 'antd';

import payment from '../../assets/images/payment.png';

function FooterCopyright() {
  return(
    <div className="footerCopyright">
      <div className="container">
        <div className="copyright">©2022 Created by Agro teams</div>
        <div className="toTop"><img src={payment} alt="Payment" /></div>
      </div>
      <BackTop />
    </div>
  );
}

export default FooterCopyright;