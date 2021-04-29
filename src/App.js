import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import  Card from "./cards";
import "./App.css";
import "./card.css";
export default function App() {
  let pricedata = [
    {
      plan: "FREE",
      currency: "$",
      price: "0",
      period: "month",
      offers: [
        {
          name: "Single User",
          isEnabled:true
        },
        {
          name: "5GB Storage",
          isEnabled:true
        },
        {
          name: "Unlimited Public Projects",
          isEnabled:true
        },
        {
          name: "Community Access",
          isEnabled:true
        },
        {
          name: "Unlimited Private Projects",
          isEnabled:false
        },
        {
          name: "Dedicated Phone Support",
          isEnabled:false
        },
        {
          name: "Free Subdomains",
          isEnabled:false
        },
        {
          name: "Monthly Status Reports",
          isEnabled:false
        },
      ],
    },
    {
        plan: "PLUS",
        currency: "$",
        price: "9",
        period: "month",
        offers: [
          {
            name: "5 User",
            isEnabled:true
          },
          {
            name: "50GB Storage",
            isEnabled:true
          },
          {
            name: "Unlimited Public Projects",
            isEnabled:true
          },
          {
            name: "Community Access",
            isEnabled:true
          },
          {
            name: "Unlimited Private Projects",
            isEnabled:true
          },
          {
            name: "Dedicated Phone Support",
            isEnabled:true
          },
          {
            name: "Free Subdomains",
            isEnabled:true
          },
          {
            name: "Monthly Status Reports",
            isEnabled:false
          },
        ],
      },
      {
        plan: "PRO",
        currency: "$",
        price: "49",
        period: "month",
        offers: [
          {
            name: "Unlimited User",
            isEnabled:true
          },
          {
            name: "150GB Storage",
            isEnabled:true
          },
          {
            name: "Unlimited Public Projects",
            isEnabled:true
          },
          {
            name: "Community Access",
            isEnabled:true
          },
          {
            name: "Unlimited Private Projects",
            isEnabled:true
          },
          {
            name: "Dedicated Phone Support",
            isEnabled : true
          },
          {
            name: "Unlimited Free Subdomains",
            isEnabled:true
          },
          {
            name: "Monthly Status Reports",
            isEnabled:true
          },
        ],
      },
  ];
  


  return (
    <>
   <section className="pricing py-5">
       <div className="container">
           <div className="row">
         {
             pricedata.map((obj) => {
                 return <Card data={obj}></Card>
             })
         }
           </div>
       </div>
   </section>
   </>
  );
}
