import React from 'react';
import '../src/styles/pricing.css';
function Pricing() {
    const plans = [
        {
            id:0,
            class:'free',
            price:'$0',
            abouts:['Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet consectetur.'],
        },
        {
            id:1,
            class:'lite',
            price:'$24',
            abouts:['Lorem ipsum dolor sit amet consectetur.','Lorem ipsum dolor sit amet consectetur.','Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet consectetur.'],

        },
        {
            id:2,
            class:'standard',
            price:'$40',
            abouts:['Lorem ipsum dolor sit amet consectetur.','Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum dolor sit amet consectetur.'],

        }
    ]
  return (
    <div className='pricing'>
        <h3 className='center'>Pricing and Plans</h3>
        <p className='center sminfo'>Lorem ipsum dolor sit amet consectetur. Aliquet <br/> scelerisque sem commodo turpis ipsum.</p>
        <div className='pricing_cards'>
            {plans.map(plan=>{
                return(
                <div className={`card ${plan.class}`} key={plan.id}>
                    <div className='smfont'>{plan.class}</div>
                    <div className='price'>{plan.price}</div>
                    <button>Get Started</button>
                    {plan.abouts.map(info=>{
                        return(
                            <p>{info}</p>
                        )
                    })}
                </div>
                )
            })}
        </div>
    </div>
        
    );
}
export default Pricing;