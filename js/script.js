document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".message__form")
  const formResult = document.querySelector(".form__result")

  const headerButton = document.querySelector(".header__nav__button")

  headerButton.addEventListener("click", () => {
    const headerNav = document.querySelector(".header__nav")
    headerNav.classList.toggle("header__nav--active")

    const xIcon = document.querySelector(".lucide-x")
    const menuIcon = document.querySelector(".lucide-menu")

    xIcon.classList.toggle("hidden")
    menuIcon.classList.toggle("hidden")
  })

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(form)

    if (!formResult.children.length) {
      const greetingsSubtitle = document.querySelector(".greetings__subtitle")
      greetingsSubtitle.textContent = `Hi, ${formData.get("nama")}`

      const formResultContent = document.createElement("div")
      formResultContent.classList.add("form__result__content")

      formData.forEach((value, key) => {
        const newChild = document.createElement("div")
        newChild.classList.add("form__result__content__wrapper")
        const newChildLabel = document.createElement("label")
        newChildLabel.textContent = key
        newChildLabel.classList.add("form__result__content__label")
        const newChildText = document.createElement("p")
        newChildText.textContent = value
        newChildText.id = `result_${key}`
        newChildText.classList.add("form__result__content__value")

        newChild.appendChild(newChildLabel)
        newChild.appendChild(newChildText)

        formResultContent.appendChild(newChild)
      })

      formResult.appendChild(formResultContent)
      const clearButton = document.createElement("button")
      clearButton.textContent = "Clear"
      clearButton.classList.add("form__result__clear")
      clearButton.addEventListener("click", () => {
        formResult.innerHTML = ""
        const greetingsSubtitle = document.querySelector(".greetings__subtitle")
        greetingsSubtitle.textContent = "Hi, User"
        form.reset()
      })
      formResult.appendChild(clearButton)
      return
    }

    formData.forEach((value, key) => {
      const formResultContentValue = document.getElementById(`result_${key}`)

      formResultContentValue.textContent = value
    })
  })
})
