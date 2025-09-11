import ListedServices from "../components/Service Page/ListedServices";

export default function ServicesListings() {
    return(
        <section className="serviceslistingpage">
            <h1>Our Services</h1>
            <h2>Select a service you are interested in</h2>
            <p>Triline Infotech work efficiently and create customer centric software & custom mobile apps with excel in the era of Productivity Apps, MIS and CMS</p>
                <ListedServices service="Furniture Assembly" serviceInfo="We expertise in delivering MIS services with high performance and scalable enterprise solutions that will help you dominate the" pageId="furn"/>
                <ListedServices service="Gutter Cleaning" serviceInfo="We expertise in delivering MIS services with high performance and scalable enterprise solutions that will help you dominate the" pageId="gutt"/>
                <ListedServices service="Home Repairs" serviceInfo="We expertise in delivering MIS services with high performance and scalable enterprise solutions that will help you dominate the" pageId="homerep"/>
                <ListedServices service="Painting" serviceInfo="We expertise in delivering MIS services with high performance and scalable enterprise solutions that will help you dominate the" pageId="paint"/>
                <ListedServices service="Plumbing" serviceInfo="We expertise in delivering MIS services with high performance and scalable enterprise solutions that will help you dominate the" pageId="plumb"/>
                <ListedServices service="House Siding" serviceInfo="We expertise in delivering MIS services with high performance and scalable enterprise solutions that will help you dominate the" pageId="siding"/>
                <ListedServices service="Carpentry" serviceInfo="We expertise in delivering MIS services with high performance and scalable enterprise solutions that will help you dominate the" pageId="carp"/>
                <ListedServices service="Electrical" serviceInfo="We expertise in delivering MIS services with high performance and scalable enterprise solutions that will help you dominate the" pageId="elect"/>
                <ListedServices service="Outdoor Living" serviceInfo="We expertise in delivering MIS services with high performance and scalable enterprise solutions that will help you dominate the" pageId="outliv"/>
                <ListedServices service="Pools" serviceInfo="We expertise in delivering MIS services with high performance and scalable enterprise solutions that will help you dominate the" pageId="pool"/>
                <ListedServices service="Hardscaping" serviceInfo="We expertise in delivering MIS services with high performance and scalable enterprise solutions that will help you dominate the" pageId="hards"/>
                <ListedServices service="Patios" serviceInfo="We expertise in delivering MIS services with high performance and scalable enterprise solutions that will help you dominate the" pageId="patio"/>
                <ListedServices service="Outdoor Kitchens" serviceInfo="We expertise in delivering MIS services with high performance and scalable enterprise solutions that will help you dominate the" pageId="outkit"/>
            
        </section>
    );
}