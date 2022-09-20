<template>
	<section>
		<div class="d-flex justify-content-center mt-5 mb-4">
			<h1 class="ms-3" style="font-family: 'Poppins', sans-serif; font-weight: 600; color: #2F80ED">
				Dev survey
			</h1>
		</div>

		<div class="container-fluid">
			<div class="row" id="header">
				<div class="col-12 col-md-6">
					<div class="img">
						<img alt="" src="./image.png" class='img' />
					</div>
				</div>

				<div class="col-12 col-md-6" id="col2">

					<h1
						style="font-family: Poppins; font-size: 38px; font-weight: 900; line-height: 57px; letter-spacing: 0em;	text-align: left; color: #4B4B4B;			">
						CAMEROON <br> DEVELOPERS SURVEY
					</h1>
					<p>You are a cameroonian developer, please take this 3 minutes survey</p>
					<button class="btn btn-primary"> <i class="fa fa-chevron-right"></i><a
							href="https://github.com/osscameroon/devsurvey/issues/new?assignees=&labels=&template=take-the-survey.yaml&title=DO+NOT+EDIT+-+takes+the+developer+survey"
							target="_blank">TAKE THE SURVEY</a></button>
				</div>
			</div>
		</div>
	</section>
	<div class="d-flex justify-content-center">
		<div class="container-fluid">
			<div class="d-flex justify-content-center mt-5 mb-2">
				<h1 class="ms-3"
					style="font-family: 'Poppins', sans-serif; line-height:57.45px; font-weight: 900; color: #4B4B4B; font-size:38.3px">
					About the survey
				</h1>
			</div>

			<div class="d-flex justify-content-center mb-5">
				<p>
					Cameroon developers survey is an initiative of OSS. explores the current <br>
					landscape of developers and
					the evolving lifestyle of the ecosystem.
				</p>
			</div>
		</div>
	</div>
	<div class="d-flex mt-5 mb-2" style="margin-left:300px">
		<h1 class="ms-3"
			style="font-family: 'Poppins', sans-serif; line-height:57.45px; font-weight: 1000; color: #4B4B4B; font-size:64px">
			Where they live
		</h1>
	</div>
	
	<div class="container-fluid">
		<div class="row" style="background-color:#F6F6F6;">
			<maps-component></maps-component>
			
		</div>
	</div>
	

</template>

<script>
	import MapsComponent from './MapsComponent.vue';

export default {
	components:{
		MapsComponent
	}

}
</script>

<style scoped>
section {
	max-width: 100%;
}

#header {
	background: #DEE7F0;
	width: 1440px;
	height: 550px;

}

.img {
	height: 400px;

}

#col2 {
	padding-top: 150px;
}





p {
	font-family: Poppins;
	font-size: 14px;
	font-weight: 300;
	line-height: 18px;
	letter-spacing: 0em;
	text-align: left;
	color: #878D93;


}

button {
	font-family: Poppins;
	font-size: 24px;
	font-weight: 700;
	line-height: 36px;
	letter-spacing: 0em;
	text-align: center;
	cursor: pointer;
	border-radius: 0.5em;

}

button i {
	float: right;
	margin-top: 6px;
	margin-left: 5px;
}

a {
	text-decoration: none;
	color: white;

}

.img {
	width: auto;
	height: auto;
}
</style>