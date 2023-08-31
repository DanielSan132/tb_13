import{List } from "@phosphor-icons/react"

import"./Header.css"
function Header() {
  return (
    <header>
<div className="mobile">
    <div className="menu">
        <button>
        <List size={32} />
        </button>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdoclogo.com%2Fpt&psig=AOvVaw39Yr61ABNmtYcEDzn2CA1M&ust=1693598265313000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCODm3KnXh4EDFQAAAAAdAAAAABAX" alt="pinguin" />
    </div>
</div>
    </header>
  )
}

export default Header