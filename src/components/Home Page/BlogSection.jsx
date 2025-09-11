import BlogCards from "./BlogCards";

export default function({blogImg, date, blogTitle}){
   return(
<section id="blog-section">
    <h2>Our Recent Blog post</h2>
    <div id="blogcard-ui">
    <BlogCards blogImg="/images/BlogSection/7fa87698d8fb45aa4ea136d4b6731c7fdf420ad1.png" date="Garden / Sep 26, 2022 " blogTitle="Top 5 Secret Home Repairing Tips Discussions"/>
    <BlogCards blogImg="/images/BlogSection/cade89498a670f990fb7eb82f921a2ff895ee168.png" date="Garden / Sep 26, 2022 " blogTitle="10 Most Popular Comod Clean"/>
    <BlogCards blogImg="/images/BlogSection/97adcadf5753d2840b599c26812b51a3bb2f12fe.png" date="Garden / Sep 26, 2022 " blogTitle="Repairing Your Home Pipeline Using Equipment's"/>
   </div>
</section>
    );
}