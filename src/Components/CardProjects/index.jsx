import Data from "../../data/projects.json"

export default function CardProjects() {
   return (
      <section>
         {Data.map((i) => (
            <section key={i.id}>
               <figure>
                  <img src={i.img} alt={i.descriptionAlt} />
               </figure>
               <section>
                  <h3>{i.title}</h3>
                  <p>{i.descriptionText}</p>
                  <nav>
                     <a 
                        href={i.githubUrl} 
                        target="_blanck" 
                        rel="noreferrer">
                           <img 
                              src={i.githubImg} 
                              alt={i.githubImgAlt}
                           />
                     </a>
                     <a 
                        href={i.deployUrl}
                        target="_blanck" 
                        rel="noreferrer">
                           <img 
                              src={i.deployImg} 
                              alt={i.deployImgAlt}
                           />
                     </a>
                  </nav>
                  </section>
            </section>
         ))}
      </section>
   )
}