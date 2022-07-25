<template>
	<div id="our-values" class="
		bg-light
		hidden flex-col justify-center items-center
		lg:py-16 lg:p-0 lg:h-60
		md:py-12
		py-14
	">
		<h3 class="
			font-bold text-dark
			text-4xl
			lg:mb-8
			md:mb-6
			mb-4
		">Our Values</h3>
		<p class="
			text-slate-500
			md:w-[69vw] md:px-0 md:text-base md:leading-7 md:block
			sm:w-auto sm:px-24
			px-12 text-sm
			opacity-0 hidden
		">
			We value the lasting reputation we have built, more than the short term financial success we could get. We value the irreplaceable human relation we have with everyone. We value the dedication of our employees, their energy and the growing intention to improve. We value the rewarding performance and the long-term relationship with our customers
		</p>
		<p class="
			text-slate-500
			md:w-[69vw] md:px-0 md:text-base md:leading-7 
			sm:w-auto sm:px-24
			px-12 text-sm
			opacity-1 hidden
		">
			We value the lasting reputation we have built, more than the short term financial success we could get.
		</p>
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