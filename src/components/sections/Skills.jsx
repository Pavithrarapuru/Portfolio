import skills from '../../data/skills'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import SkillCard from '../skills/SkillCard'

function Skills() {
  const groupedSkills = skills.reduce((groups, skill) => {
    if (!groups[skill.category]) {
      groups[skill.category] = []
    }

    groups[skill.category].push(skill)

    return groups
  }, {})

  return (
    <section
      id="skills"
      data-label="Skills"
      className="mx-auto max-w-[1140px] px-6 py-16 max-tablet:px-4 max-tablet:py-12"
    >
      <Reveal>
        <SectionHeading
          eyebrow="The toolkit"
          title="Tools I reach for."
          copy="A growing set of technologies I use to move from a first sketch to something people can use."
        />
      </Reveal>

      <div className="space-y-10">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category}>
            <h3 className="mb-4 text-lg font-semibold">
              {category}
            </h3>

            <div className="grid grid-cols-3 gap-5 max-tablet:grid-cols-2 max-small:grid-cols-1">
              {categorySkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  delay={index * 0.05}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills