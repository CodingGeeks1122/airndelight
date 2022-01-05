import SimpleReactFooter from "simple-react-footer";

const description = " Guaranteed great fun on any budget. Cheap but safe and all prices inclusive. Whole tour packages !!!      Owner:   With over years of experience and passion for catering in the hospitality sector, Mr. Dev has well-groomed his carrier as a businessman. Mr. Dev is a dream chaser who has setup his own travel agency in Delhi called “Air & Delight”. He is investor & owner of RIP tattooz. He was born and brought up in Nainital and completed his schooling and graduated from Delhi. As a military family background he loved to travel as a child. Mr. Dev persuades his career in a travel agency and after 3 years of work profile he decided to start something on his own. He is determined to form a travel agency that will bring revolution in the hospitality sector. As a hobby, Mr. Dev has a great interest in listening to music, clubbing, love for food, and playing table tennis. He also has other ventures like hey Xenia Café Delhi and Dwarka Syd.";
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