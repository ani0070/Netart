// Footer.js
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer_div'>
      <section>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </section>
      <hr/>
      <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
    
      <section>CHEMICALS & PROCESS <b>|</b> POWER <b>|</b> WATER & WASTE WATER <b>|</b> OILS & GAS <b>|</b> PHARMA <b>|</b> SUGARS & DISTILLERIES <b>|</b> PAPER & PULP <b>|</b> MARINE & DEFENCE <b>|</b> METAL & MINING <b>|</b> FOOD & BEVERAGE <b>|</b> PETROCHEMICAL & REFINERIES <b>|</b> SOLAR <b>|</b> BUILDING <b>|</b> HVAC <b>|</b> FIRE FIGHTING <b>|</b> AGRICULTURE & RESIDENTIAL</section><br/>

    <footer className="footer">
      <div className="footer-section">
        <div className="footer-item">
        <i className="fa-solid fa-phone"></i>
          <>Toll Free 1800 200 1234</>
        </div>
        <div className="footer-item">
          <i className="fab fa-facebook"></i>
          <>www.facebook.com/cripumps</>
        </div>
        <div className="footer-item">
        <i className="fa-solid fa-globe"></i>
          <>www.crigroups.com</>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;