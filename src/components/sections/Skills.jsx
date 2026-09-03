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

      <div className="space-y-5">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div
            key={category}
            className="rounded-2xl border border-white/10 px-5 py-4"
          >
            {/* Category heading */}
            <h3 className="mb-3 text-base font-semibold">
              {category}
            </h3>

            {/* Compact skills grid */}
            <div className="grid grid-cols-4 gap-3 max-tablet:grid-cols-3 max-small:grid-cols-2">
              {categorySkills.map((skill, index) => (
                <SkillCard
                  key={`${skill.name}-${category}`}
                  skill={{
                    ...skill,
                    category: '',
                  }}
                  delay={index * 0.03}
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