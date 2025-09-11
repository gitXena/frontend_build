import TeamMembers from "./TeamMembers";

export default function ProfesionalsTeam(){
    return(
        <section className="profesionalsteam-section">
        <h2>Our Professionals Team</h2>
        <div id="team-members-ui">
        <TeamMembers memberImg="/images/ProfessionalTeam/47ee3cb974e89e7cfd8f09ac6e1dcdee50598433.png" memberName="John Smith" designation="Master Craftsman" experience="3"/>
        <TeamMembers memberImg="/images/ProfessionalTeam/019fb525f6e23bdd568ace7f41082e7ffd6709f3.png" memberName="Emily Johnson" designation="Plumbing Prodigy" experience="3.5"/>
        <TeamMembers memberImg="/images/ProfessionalTeam/8a380de38707ca550e9fa175af91e356fa2e1167.png" memberName="Michael Williams" designation="Electrical Guru" experience="2.5"/>
        <TeamMembers memberImg="/images/ProfessionalTeam/e588c4357ce5e426df09c9408f96056c02b0911f.png" memberName="Christopher Martinez" designation="Technology Wiz" experience="5"/>
        </div>
        </section>

    );
}