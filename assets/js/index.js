const lang_switchers = document.querySelectorAll('.lang_switcher')
const data_translates = document.querySelectorAll('[data_translate]')

const dictionary = {
  ru: {
    heading: 'Постоянный количественный рост ни к чему нас не обязывает!',
    content:
      'В своём стремлении повысить качество жизни, они забывают, что высококачественный прототип будущего проекта однозначно фиксирует необходимость поставленных обществом задач. С другой стороны, разбавленное изрядной долей эмпатии, рациональное мышление способствует подготовке и реализации соответствующих условий активизации. Кстати, тщательные исследования конкурентов формируют глобальную экономическую сеть и при этом - объявлены нарушающими общечеловеческие нормы этики и морали.'
  },
  ua: {
    heading: "Постійне кількісне зростання ні до чого нас не зобов'язує!",
    content:
      'У своєму прагненні підвищити якість життя, вони забувають, що високоякісний прототип майбутнього проекту однозначно фіксує необхідність поставлених суспільством завдань. З іншого боку, розбавлене неабиякою часткою емпатії, раціональне мислення сприяє підготовці та реалізації відповідних умов активізації. До речі, ретельні дослідження конкурентів формують глобальну економічну мережу і при цьому - оголошені такими, що порушують загальнолюдські норми етики і моралі.'
  },
  en: {
    heading: 'Constant quantitative growth does not oblige us to anything!',
    content:
      'In their striving to improve the quality of life, they forget that a high-quality prototype of a future project unambiguously fixes the need for the tasks set by society. On the other hand, diluted with a fair amount of empathy, rational thinking contributes to the preparation and implementation of the appropriate conditions for activation. By the way, thorough research of competitors forms a global economic network and, at the same time, is declared to violate universal norms of ethics and morality.'
  }
}

document.addEventListener('DOMContentLoaded', () =>
  lang_switchers.forEach(lang_switcher =>
    lang_switcher.addEventListener('click', event =>
      data_translates.forEach(text_for_translation =>
          (text_for_translation.innerText =
            dictionary[event.target.attributes.data_language.value][
              text_for_translation.attributes.data_translate.value
            ])
      )
    )
  )
)

// При ошибке 'document is not defined' обернуть все в:
// if(typeof window==='object'){
//   {...весь код который выше}
// }
