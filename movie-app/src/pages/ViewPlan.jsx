const ViewPlan = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$8.99/month',
      features: ['720p resolution', '1 device', 'Limited downloads'],
      className: 'basic-plan'
    },
    {
      name: 'Standard',
      price: '$13.99/month',
      features: ['1080p resolution', '2 devices', 'Unlimited downloads'],
      className: 'standard-plan'
    },
    {
      name: 'Premium',
      price: '$17.99/month',
      features: ['4K resolution', '4 devices', 'Unlimited downloads', 'HDR'],
      className: 'premium-plan'
    }
  ]

  return (
    <div className="wrapper">
      <div className="plans-wrapper">
        <h2>Choose Your Plan</h2>
        {plans.map((plan, index) => (
          <div key={index} className={`plan ${plan.className}`}>
            <h2>{plan.name}</h2>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewPlan 