import skills from '../../data/skills'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import SkillCard from '../skills/SkillCard'

function Skills() {
  return (
    <section id="skills" data-label="Skills" className="mx-auto max-w-[1140px] px-6 py-16 max-tablet:px-4 max-tablet:py-12">
      <Reveal>
        <SectionHeading
          eyebrow="The toolkit"
          title="Tools I reach for."
          copy="A growing set of technologies I use to move from a first sketch to something people can use."
        />
      </Reveal>
      <div className="grid grid-cols-3 gap-5 max-tablet:grid-cols-2 max-small:grid-cols-1">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} delay={index * 0.05} />
        ))}
      </div>
    </section>
  )
}

export default Skills

