import Animate from "../Animate/Animate";
import Style from "./Services.module.scss";

const Services = () => {
  const cardData = [
    {
      icon: "icon-car",
      title: "Car Modification",
      description: "Transforming cars with custom designs and performance boosts.",
    },
    {
      icon: "icon-cogs",
      title: "Paint Protection Film (PPF)",
      description:
        "Preserving your car's finish with a durable, invisible shield against scratches, chips, and environmental damage.",
    },
    {
      icon: "icon-cogs",
      title: "Ceramic Coating",
      description:
        "Enhancing your car's shine and protection with a long-lasting, glossy ceramic layer.",
    },
    {
      icon: "icon-wrench",
      title: "Auto Care Services",
      description:
        "Comprehensive care for your vehicle, ensuring top-notch maintenance, detailing, and protection.",
    },
    {
      icon: "icon-developer",
      title: "Web Development",
      description:
        "Building responsive, user-friendly websites that blend creativity with functionality.",
    },
    {
      icon: "icon-webdesign",
      title: "Website Design",
      description:
        "Designing engaging and visually stunning websites that captivate and convert users.",
    },
  ];

  return (
    <section className={Style.services} id="services">
      <Animate as="div" className="container anim">
        <div className={Style.services_ttl}>
          <h3 className="h2">Services</h3>
        </div>
        <div className={`${Style.row} row`}>
          {cardData.map((card, index) => (
            <div key={index} className={`  col-md-4 col-xl-3 ${Style.car_wrap}`}>
              <Animate as="div" className={`${Style.card} anim`}>
                <div className={Style.card_img}>
                  <span className={card.icon}></span>
                </div>
                <div className={Style.card_ttl}>
                  <h3 className={Style.ttl}>{card.title}</h3>
                </div>
                <div className={Style.card_content}>
                  <p className="mb-0">{card.description}</p>
                </div>
              </Animate>
            </div>
          ))}
        </div>
      </Animate>
    </section>
  );
};

export default Services;
