import "./App.css";
import Card from "./Components/Card";

function App() {
  const jobOpenings = [
    {
      brandLogo: "https://blog.logomyway.com/meta-logo/",
      nameOfCompany: "Meta",
      datePosted: "3 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 85,
      location: "Menlo Park, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      nameOfCompany: "Amazon",
      datePosted: "1 week ago",
      post: "Cloud Support Associate",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 45,
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      nameOfCompany: "Apple",
      datePosted: "5 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 70,
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      nameOfCompany: "Netflix",
      datePosted: "2 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 95,
      location: "Los Gatos, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/wipro.com",
      nameOfCompany: "Wipro",
      datePosted: "1 day ago",
      post: "Site Reliability Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 82,
      location: "Pune, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      nameOfCompany: "Microsoft",
      datePosted: "10 weeks ago",
      post: "Security Analyst",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 55,
      location: "Redmond, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      nameOfCompany: "Amazon",
      datePosted: "4 days ago",
      post: "Data Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: 60,
      location: "Gurgaon, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/flipkart.com",
      nameOfCompany: "Flipkart",
      datePosted: "3 days ago",
      post: "UX Researcher",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 40,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      nameOfCompany: "Apple",
      datePosted: "2 weeks ago",
      post: "Product Manager",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 90,
      location: "Cupertino, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      nameOfCompany: "Meta",
      datePosted: "6 days ago",
      post: "AR/VR Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 88,
      location: "London, UK",
    },
    {
      brandLogo: "https://logo.clearbit.com/salesforce.com",
      nameOfCompany: "Salesforce",
      datePosted: "3 days ago",
      post: "DevOps Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 72,
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/oracle.com",
      nameOfCompany: "Oracle",
      datePosted: "1 week ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 78,
      location: "Chennai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/intel.com",
      nameOfCompany: "Intel",
      datePosted: "5 days ago",
      post: "Hardware Validation Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 55,
      location: "Pune, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      nameOfCompany: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI Research Scientist",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 95,
      location: "Santa Clara, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/cisco.com",
      nameOfCompany: "Cisco",
      datePosted: "10 weeks ago",
      post: "Network Security Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 70,
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/service-now.com",
      nameOfCompany: "ServiceNow",
      datePosted: "3 days ago",
      post: "Software Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 45,
      location: "Gurgaon, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/sap.com",
      nameOfCompany: "SAP",
      datePosted: "2 weeks ago",
      post: "SAP ABAP Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 68,
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/qualcomm.com",
      nameOfCompany: "Qualcomm",
      datePosted: "1 day ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 60,
      location: "Bangalore, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.nameOfCompany}
              datePosted={elem.datePosted}
              post={elem.post}
              brandLogo={elem.brandLogo}
              pay={elem.pay}
              tag1={elem.tag1}
              tag2={elem.tag2}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
