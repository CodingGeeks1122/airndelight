import SimpleReactFooter from "simple-react-footer";

const description = "Guaranteed great fun on any budget. Cheap - but safe and all inclusive. Whole tour packages!! Get in touch to know more.";
const title = "Air&Delight";
const columns = [
{
    title: "Resources",
    resources: [
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        },
        {
            name: "Admin",
            link: "/admin"
        }
    ]
},
{
    title: "Legal",
    resources: [
        {
            name: "Privacy",
            link: "/privacy"
        },
        {
            name: "Terms",
            link: "/terms"
        }
    ]
},
{
    title: "Visit",
    resources: [
        {
            name: "Locations",
            link: "/locations"
        },
        {
            name: "Culture",
            link: "/culture"
        }
    ]
}
];
 
const Footer = () => {
    return (
    <SimpleReactFooter 
        description={description} 
        title={title}
        columns={columns}
        linkedin=""
        facebook="airndelight"
        twitter=""
        instagram=""
        youtube="?"
        pinterest=""
        copyright="airndelight"
        iconColor="black"
        backgroundColor="bisque"
        fontColor="black"
        copyrightColor="darkgrey"
    />
    )
}

export default Footer;