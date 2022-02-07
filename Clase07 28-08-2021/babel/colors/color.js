class Color {
	getColor() {
		let r, g, b
		r = Math.floor(Math.random() * 255)
		g = Math.floor(Math.random() * 255)
		b = Math.floor(Math.random() * 255)
		let rgb = `rgb(${r},${g},${b})`
		return rgb
	}
}

const unColor = new Color()
console.log(unColor.getColor())
console.log(unColor.getColor())
