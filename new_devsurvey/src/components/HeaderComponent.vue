<template>
	<div>
		<div class="d-flex justify-content-center">
			<div class="container-fluid">
				<div class="d-flex justify-content-center mt-5 mb-4">
					<h1 class="ms-3" style="font-family: 'Poppins', sans-serif; font-weight: 600; color: #2F80ED">
						Dev survey
					</h1>
				</div>

				<div class="d-flex justify-content-center mb-5">
					<a href="https://opencollective.com/osscameroon/donate" target="_blank">
						<img src="https://opencollective.com/webpack/donate/button@2x.png?color=white" width=200 />
					</a>
				</div>

				<div class="row d-flex justify-content-center text-secondary">
					<p style="text-align: center">You are a cameroonian developer, please take this 3 minutes survey <a
							class="text-primary"
							href="https://github.com/osscameroon/devsurvey/issues/new?assignees=&labels=&template=take-the-survey.yaml&title=DO+NOT+EDIT+-+takes+the+developer+survey"
							target="_blank">here</a></p>
				</div>
			</div>
		</div>

		<form class="row pt-4 pb-4 g-2 d-flex justify-content-center mt-5 mb-5 bg-light">
			<div class="col-md-3">
				<div class="input-group">
					<input id="search-input" type="text" name="query" class="form-control" placeholder="search"
						value="" />
					<button type="submit" class="btn btn-primary">
						<i class="fa fa-search" aria-hidden="true"></i>
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'HeaderComponent',
	props: {
	}
}
</script>
