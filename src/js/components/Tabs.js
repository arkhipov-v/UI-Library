class Tabs {
	constructor(selector) {
		this.selector = selector
		// this.tabs = document.querySelectorAll(`[data-tabs="${this.selector}"]`)
		this.tabs = document.querySelector(`[data-tabs="${this.selector}"]`)
		this.tabsItems = this.tabs.querySelectorAll(".tabs__header-item")
		this.tabsContents = this.tabs.querySelectorAll(".tabs__content")

		this.check()
	}

	check() {
		if (this.tabs) {
			console.log("Tabs created.")
			this.init()
		} else {
			console.log("Tabs not found.")
		}
	}

	init() {
		console.log("start init")
		this.tabsItems.forEach((tab, index) => {
			tab.addEventListener("click", () => {
				this.removeActiveTab()
				this.addActiveTab(index)
			})
		})
	}

	removeActiveTab() {
		this.tabsItems.forEach((tab) => {
			tab.classList.remove("active")
		})

		this.tabsContents.forEach((content) => {
			content.classList.remove("active")
		})
	}

	addActiveTab(index) {
		this.tabsItems[index].classList.add("active")
		this.tabsContents[index].classList.add("active")
	}
}

export default Tabs
