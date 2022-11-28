<template>
	<div id="our-brands" class="
		bg-light relative flex items-center justify-center z-10
		lg:mt-0
		md:mt-5
		mt-3
	">

			<div class="
				the-div
				absolute w-full left-0 z-0
				lg:-bottom-[22%] lg:h-[63%]
				md:-bottom-[18%] md:h-[50%] md:block
				hidden
			"></div>

		<div id="brands" class="
			flex flex-col items-center grow relative
			max-w-[1400px]
			lg:mt-10 lg:mx-32
			md:mt-6 md:mx-24
			mt-3
		">

			<div class="
				flex flex-col items-center h-[50%] overflow-hidden relative z-10
				max-w-[1000px]
				lg:m-24 lg:mx-32
				md:m-16 md:mx-24
				sm:m-10 sm:mx-16
				m-10 mx-12
			">

				<div id="shade" class="hidden absolute w-full h-full"></div>
			
				<h3 class="
					text-slate-200 font-bold
					2xl:text-6xl
					lg:text-4xl
					md:text-3xl
					text-2xl
				">Our Brand</h3>

				<div class="
					bg-slate-200 w-full h-[2px]
					lg:my-10
					md:my-6
					my-4
				"></div>

				<p class="
					text-slate-200
					lg:text-base
					md:mb-5
					sm:text-sm
					text-xs mb-3
				">
				Our brand expresses excellence and strength led by powerful women starting from top management, 
covering up 46% of the entire employees. Our service is more than a business. Luna slaughterhouse, the 
lead exporter of halal meat and meat products to the Middle East and western Africa is a great instance of 
who we are.
				</p>
				<p class="
					text-slate-200
					lg:text-base
					sm:text-sm
					text-xs
				">
				Luna is a mother company with the collaboration of various business units engaged in an 
import-export process for numerous countries.
				</p>
			</div>
		</div>
	</div>
</template>


<style scoped>
@media screen and (min-width: 768px) {
	#brands {
		background: linear-gradient(180deg, var(--lighter) 75%, transparent);
	}
}
@media screen and (max-width: 768px) {
	#brands {
		background: var(--lighter);
	}
}
.the-div {
	background: linear-gradient(180deg, var(--dark), transparent);
}
p {
	text-align: justify;
	text-align-last: center;
}
#shade {
	background: linear-gradient(0deg, var(--lighter) 75%, transparent);
	background-size: 100% 200%;
	background-position-y: 50%;
	background-repeat: no-repeat;
}
</style>