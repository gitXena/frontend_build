import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ServicePageTemplate() {
  const { pageId } = useParams();

  //temporary hard coded content
  //change page id to mach back end data later
  const pageContent = {
    furn: {
      option: "option1",
      price: "80",
      image: "/images/service page images/furniture-assembly.webp",
      title: "Furniture Assembly",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat nibh a hendrerit condimentum. Duis nulla diam, ultrices a viverra pharetra, egestas et magna. Sed elementum rutrum lacus, a commodo felis efficitur ut. Curabitur ornare, mauris vel convallis tempus, turpis augue consectetur sapien, euismod venenatis leo mauris ut dui. Donec vel nisi porttitor, malesuada lectus ut, ornare enim. Vestibulum facilisis interdum purus, id ornare turpis porta vitae. Ut ac interdum quam. Nulla dignissim ullamcorper elit, id ornare augue convallis sit amet. Vivamus molestie, felis placerat dignissim sagittis, massa nulla venenatis velit, quis convallis lacus lacus eget lacus. Proin eu lacus augue. Suspendisse vulputate, ipsum et pulvinar euismod, mi purus pharetra lorem, at gravida leo augue ut arcu. Sed rhoncus, sem sed vestibulum rhoncus, dui metus rutrum est, sit amet gravida ex justo eget mi.",
    },
    gutt: {
      option: "option2",
      price: "120",
      image: "/images/service page images/Cleaning-Gutters.jpg",
      title: "Gutter Cleaning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat nibh a hendrerit condimentum. Duis nulla diam, ultrices a viverra pharetra, egestas et magna. Sed elementum rutrum lacus, a commodo felis efficitur ut. Curabitur ornare, mauris vel convallis tempus, turpis augue consectetur sapien, euismod venenatis leo mauris ut dui. Donec vel nisi porttitor, malesuada lectus ut, ornare enim. Vestibulum facilisis interdum purus, id ornare turpis porta vitae. Ut ac interdum quam. Nulla dignissim ullamcorper elit, id ornare augue convallis sit amet. Vivamus molestie, felis placerat dignissim sagittis, massa nulla venenatis velit, quis convallis lacus lacus eget lacus. Proin eu lacus augue. Suspendisse vulputate, ipsum et pulvinar euismod, mi purus pharetra lorem, at gravida leo augue ut arcu. Sed rhoncus, sem sed vestibulum rhoncus, dui metus rutrum est, sit amet gravida ex justo eget mi.",
    },
    homerep: {
      option: "option3",
      price: "60",
      image: "/images/service page images/home-repairs.webp",
      title: "Home Repairs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat nibh a hendrerit condimentum. Duis nulla diam, ultrices a viverra pharetra, egestas et magna. Sed elementum rutrum lacus, a commodo felis efficitur ut. Curabitur ornare, mauris vel convallis tempus, turpis augue consectetur sapien, euismod venenatis leo mauris ut dui. Donec vel nisi porttitor, malesuada lectus ut, ornare enim. Vestibulum facilisis interdum purus, id ornare turpis porta vitae. Ut ac interdum quam. Nulla dignissim ullamcorper elit, id ornare augue convallis sit amet. Vivamus molestie, felis placerat dignissim sagittis, massa nulla venenatis velit, quis convallis lacus lacus eget lacus. Proin eu lacus augue. Suspendisse vulputate, ipsum et pulvinar euismod, mi purus pharetra lorem, at gravida leo augue ut arcu. Sed rhoncus, sem sed vestibulum rhoncus, dui metus rutrum est, sit amet gravida ex justo eget mi.",
    },
    paint: {
      option: "option4",
      price: "80",
      image: "/images/service page images/Painting.jpg",
      title: "Painting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat nibh a hendrerit condimentum. Duis nulla diam, ultrices a viverra pharetra, egestas et magna. Sed elementum rutrum lacus, a commodo felis efficitur ut. Curabitur ornare, mauris vel convallis tempus, turpis augue consectetur sapien, euismod venenatis leo mauris ut dui. Donec vel nisi porttitor, malesuada lectus ut, ornare enim. Vestibulum facilisis interdum purus, id ornare turpis porta vitae. Ut ac interdum quam. Nulla dignissim ullamcorper elit, id ornare augue convallis sit amet. Vivamus molestie, felis placerat dignissim sagittis, massa nulla venenatis velit, quis convallis lacus lacus eget lacus. Proin eu lacus augue. Suspendisse vulputate, ipsum et pulvinar euismod, mi purus pharetra lorem, at gravida leo augue ut arcu. Sed rhoncus, sem sed vestibulum rhoncus, dui metus rutrum est, sit amet gravida ex justo eget mi.",
    },
    plumb: {
      option: "option5",
      price: "90",
      image: "/images/service page images/Plumbing.jpeg",
      title: "Plumbing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat nibh a hendrerit condimentum. Duis nulla diam, ultrices a viverra pharetra, egestas et magna. Sed elementum rutrum lacus, a commodo felis efficitur ut. Curabitur ornare, mauris vel convallis tempus, turpis augue consectetur sapien, euismod venenatis leo mauris ut dui. Donec vel nisi porttitor, malesuada lectus ut, ornare enim. Vestibulum facilisis interdum purus, id ornare turpis porta vitae. Ut ac interdum quam. Nulla dignissim ullamcorper elit, id ornare augue convallis sit amet. Vivamus molestie, felis placerat dignissim sagittis, massa nulla venenatis velit, quis convallis lacus lacus eget lacus. Proin eu lacus augue. Suspendisse vulputate, ipsum et pulvinar euismod, mi purus pharetra lorem, at gravida leo augue ut arcu. Sed rhoncus, sem sed vestibulum rhoncus, dui metus rutrum est, sit amet gravida ex justo eget mi.",
    },
    siding: {
      option: "option6",
      price: "200",
      image: "/images/service page images/types-of-vinyl-siding.jpeg",
      title: "House Siding",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat nibh a hendrerit condimentum. Duis nulla diam, ultrices a viverra pharetra, egestas et magna. Sed elementum rutrum lacus, a commodo felis efficitur ut. Curabitur ornare, mauris vel convallis tempus, turpis augue consectetur sapien, euismod venenatis leo mauris ut dui. Donec vel nisi porttitor, malesuada lectus ut, ornare enim. Vestibulum facilisis interdum purus, id ornare turpis porta vitae. Ut ac interdum quam. Nulla dignissim ullamcorper elit, id ornare augue convallis sit amet. Vivamus molestie, felis placerat dignissim sagittis, massa nulla venenatis velit, quis convallis lacus lacus eget lacus. Proin eu lacus augue. Suspendisse vulputate, ipsum et pulvinar euismod, mi purus pharetra lorem, at gravida leo augue ut arcu. Sed rhoncus, sem sed vestibulum rhoncus, dui metus rutrum est, sit amet gravida ex justo eget mi.",
    },
    carp: {
      option: "option7",
      price: "60-80",
      image: "/images/service page images/carpentry.jpg",
      title: "Carpentry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat nibh a hendrerit condimentum. Duis nulla diam, ultrices a viverra pharetra, egestas et magna. Sed elementum rutrum lacus, a commodo felis efficitur ut. Curabitur ornare, mauris vel convallis tempus, turpis augue consectetur sapien, euismod venenatis leo mauris ut dui. Donec vel nisi porttitor, malesuada lectus ut, ornare enim. Vestibulum facilisis interdum purus, id ornare turpis porta vitae. Ut ac interdum quam. Nulla dignissim ullamcorper elit, id ornare augue convallis sit amet. Vivamus molestie, felis placerat dignissim sagittis, massa nulla venenatis velit, quis convallis lacus lacus eget lacus. Proin eu lacus augue. Suspendisse vulputate, ipsum et pulvinar euismod, mi purus pharetra lorem, at gravida leo augue ut arcu. Sed rhoncus, sem sed vestibulum rhoncus, dui metus rutrum est, sit amet gravida ex justo eget mi.",
    },
    elect: {
      option: "option8",
      price: "70",
      image: "/images/service page images/electrical.jpg",
      title: "Electrical",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat nibh a hendrerit condimentum. Duis nulla diam, ultrices a viverra pharetra, egestas et magna. Sed elementum rutrum lacus, a commodo felis efficitur ut. Curabitur ornare, mauris vel convallis tempus, turpis augue consectetur sapien, euismod venenatis leo mauris ut dui. Donec vel nisi porttitor, malesuada lectus ut, ornare enim. Vestibulum facilisis interdum purus, id ornare turpis porta vitae. Ut ac interdum quam. Nulla dignissim ullamcorper elit, id ornare augue convallis sit amet. Vivamus molestie, felis placerat dignissim sagittis, massa nulla venenatis velit, quis convallis lacus lacus eget lacus. Proin eu lacus augue. Suspendisse vulputate, ipsum et pulvinar euismod, mi purus pharetra lorem, at gravida leo augue ut arcu. Sed rhoncus, sem sed vestibulum rhoncus, dui metus rutrum est, sit amet gravida ex justo eget mi.",
    },
    outliv: {
      option: "option9",
      price: "400",
      image: "/images/service page images/outdoor living.jpg",
      title: "Outdoor Living",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat nibh a hendrerit condimentum. Duis nulla diam, ultrices a viverra pharetra, egestas et magna. Sed elementum rutrum lacus, a commodo felis efficitur ut. Curabitur ornare, mauris vel convallis tempus, turpis augue consectetur sapien, euismod venenatis leo mauris ut dui. Donec vel nisi porttitor, malesuada lectus ut, ornare enim. Vestibulum facilisis interdum purus, id ornare turpis porta vitae. Ut ac interdum quam. Nulla dignissim ullamcorper elit, id ornare augue convallis sit amet. Vivamus molestie, felis placerat dignissim sagittis, massa nulla venenatis velit, quis convallis lacus lacus eget lacus. Proin eu lacus augue. Suspendisse vulputate, ipsum et pulvinar euismod, mi purus pharetra lorem, at gravida leo augue ut arcu. Sed rhoncus, sem sed vestibulum rhoncus, dui metus rutrum est, sit amet gravida ex justo eget mi.",
    },
    pool: {
      option: "option10",
      price: "1000",
      image: "/images/service page images/pool.jpg",
      title: "Pools",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat nibh a hendrerit condimentum. Duis nulla diam, ultrices a viverra pharetra, egestas et magna. Sed elementum rutrum lacus, a commodo felis efficitur ut. Curabitur ornare, mauris vel convallis tempus, turpis augue consectetur sapien, euismod venenatis leo mauris ut dui. Donec vel nisi porttitor, malesuada lectus ut, ornare enim. Vestibulum facilisis interdum purus, id ornare turpis porta vitae. Ut ac interdum quam. Nulla dignissim ullamcorper elit, id ornare augue convallis sit amet. Vivamus molestie, felis placerat dignissim sagittis, massa nulla venenatis velit, quis convallis lacus lacus eget lacus. Proin eu lacus augue. Suspendisse vulputate, ipsum et pulvinar euismod, mi purus pharetra lorem, at gravida leo augue ut arcu. Sed rhoncus, sem sed vestibulum rhoncus, dui metus rutrum est, sit amet gravida ex justo eget mi.",
    },
    hards: {
      option: "option11",
      price: "600",
      image: "/images/service page images/hardscaping.jpg",
      title: "Hardscaping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat nibh a hendrerit condimentum. Duis nulla diam, ultrices a viverra pharetra, egestas et magna. Sed elementum rutrum lacus, a commodo felis efficitur ut. Curabitur ornare, mauris vel convallis tempus, turpis augue consectetur sapien, euismod venenatis leo mauris ut dui. Donec vel nisi porttitor, malesuada lectus ut, ornare enim. Vestibulum facilisis interdum purus, id ornare turpis porta vitae. Ut ac interdum quam. Nulla dignissim ullamcorper elit, id ornare augue convallis sit amet. Vivamus molestie, felis placerat dignissim sagittis, massa nulla venenatis velit, quis convallis lacus lacus eget lacus. Proin eu lacus augue. Suspendisse vulputate, ipsum et pulvinar euismod, mi purus pharetra lorem, at gravida leo augue ut arcu. Sed rhoncus, sem sed vestibulum rhoncus, dui metus rutrum est, sit amet gravida ex justo eget mi.",
    },
    patio: {
      option: "option12",
      price: "700",
      image: "/images/service page images/patio.jpg",
      title: "Patios",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat nibh a hendrerit condimentum. Duis nulla diam, ultrices a viverra pharetra, egestas et magna. Sed elementum rutrum lacus, a commodo felis efficitur ut. Curabitur ornare, mauris vel convallis tempus, turpis augue consectetur sapien, euismod venenatis leo mauris ut dui. Donec vel nisi porttitor, malesuada lectus ut, ornare enim. Vestibulum facilisis interdum purus, id ornare turpis porta vitae. Ut ac interdum quam. Nulla dignissim ullamcorper elit, id ornare augue convallis sit amet. Vivamus molestie, felis placerat dignissim sagittis, massa nulla venenatis velit, quis convallis lacus lacus eget lacus. Proin eu lacus augue. Suspendisse vulputate, ipsum et pulvinar euismod, mi purus pharetra lorem, at gravida leo augue ut arcu. Sed rhoncus, sem sed vestibulum rhoncus, dui metus rutrum est, sit amet gravida ex justo eget mi.",
    },
    outkit: {
      option: "option13",
      price: "1500",
      image: "/images/service page images/outdoor kitchen.jpeg",
      title: "Outdoor Kitchens",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat nibh a hendrerit condimentum. Duis nulla diam, ultrices a viverra pharetra, egestas et magna. Sed elementum rutrum lacus, a commodo felis efficitur ut. Curabitur ornare, mauris vel convallis tempus, turpis augue consectetur sapien, euismod venenatis leo mauris ut dui. Donec vel nisi porttitor, malesuada lectus ut, ornare enim. Vestibulum facilisis interdum purus, id ornare turpis porta vitae. Ut ac interdum quam. Nulla dignissim ullamcorper elit, id ornare augue convallis sit amet. Vivamus molestie, felis placerat dignissim sagittis, massa nulla venenatis velit, quis convallis lacus lacus eget lacus. Proin eu lacus augue. Suspendisse vulputate, ipsum et pulvinar euismod, mi purus pharetra lorem, at gravida leo augue ut arcu. Sed rhoncus, sem sed vestibulum rhoncus, dui metus rutrum est, sit amet gravida ex justo eget mi.",
    },
  };

  const content = pageContent[pageId] || {
    title: "Not Found",
    description: "",
  };
  const navigate = useNavigate();

  const handleClick = (defaultOption) => {
    navigate(`/booking/${pageId}`, { state: { defaultOption } });
  };

  const [service, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/services/id")
  //     .then(res => res.json())
  //     .then(data => setServices(data))
  //     .catch(err => console.error("Error fetching services:", err));
  // }, []);

  const { id } = useParams(); // get id from URL

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    async function fetchservices() {
      try {
        const res = await fetch(`${backendUrl}/service/services/${pageId}`);
        const data = await res.json();
        setServices(data);
        console.log(data);
      } catch (err) {
        console.error("Error fetching service:", err);
      }
    }
    fetchservices();
  }, [id, pageId, backendUrl]);

  if (!service) return <p>Loading...</p>;

  return (
    <section className="servpagetemp">
      <div className="spagecontainer">
        <img src={`${backendUrl}/image/${service.image}`} alt="" />
        {/* {service.image} */}

        <h1>
          {/* {content.title} */}
          {service.title}
        </h1>
        <p>
          {/* {content.description} */}
          {service.description}
        </p>
        <h2>
          {/* Price: ${content.price} */}
          Price: ${service.price}
        </h2>
        <div>
          <button onClick={() => handleClick(`${content.option}`)}>
            Book Service
          </button>
        </div>
        <div>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
        <div>
          <button onClick={() => navigate("/service")}>Back to Services</button>
        </div>
      </div>
    </section>
  );
}
