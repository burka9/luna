<template>
	<div class="bg-light w-full">
		<div id="our-values" class="
			bg-light
			hidden flex-col justify-center items-center
			2xl:max-w-[1700px] 2xl:mx-auto
			lg:py-16 lg:p-0 lg:h-60
			md:py-12
			sm:px-16
			p-12 px-10
		">
			<h3 class="
				font-bold text-dark
				lg:mb-8
				md:mb-6 md:text-4xl
				mb-4 text-3xl
			">Our Values</h3>
			<p class="
				text-slate-500
				md:w-[69vw] md:px-0 md:text-base md:leading-7
				leading-5
				text-sm
				opacity-0
			">
				We value the lasting reputation we have built, more than the short term financial success we could get. We value the irreplaceable human relation we have with everyone. We value the dedication of our employees, their energy and the growing intention to improve. We value the rewarding performance and the long-term relationship with our customers.
			</p>
		</div>
	</div>
</template>

<style scoped>
h3 {
	background: linear-gradient(120deg, var(--dark) 0 50%, transparent 50% 100%);
	background-size: 225%;
	background-position-x: 100%;
	transform: translateX(25px);
	background-clip: text;
	-webkit-text-fill-color: transparent;
}
p {
	text-align: justify;
	text-align-last: center;
}
</style>