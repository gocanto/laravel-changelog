<script>
import showdown from 'showdown';

export default
{
	data: function ()
	{
		return {
			raw: {}
		};
	},

	ready: function ()
	{
		this.fetchChangeLogFile();
	},

	methods:
	{
		fetchChangeLogFile: function ()
		{
			let vm = this;

			this.$http.get(this.getBranch()).then((response) => {
				vm.raw = this.toMarkdown(response.data);
			}, (response) => {
				return 'This branch does not exist!';
			});
		},

		getBranch: function ()
		{
			return 'https://raw.githubusercontent.com/laravel/framework/5.2/CHANGELOG.md';
		},

		toMarkdown: function (response)
		{
			let converter = new showdown.Converter();

			return converter.makeHtml(response);
		}
	}
}
</script>