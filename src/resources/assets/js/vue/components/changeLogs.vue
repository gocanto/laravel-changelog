<script>

import showdown from 'showdown';

export default
{
	data: function ()
	{
		return {
			raw: {},
			version: '',
			branch: {
				'5.2': 'https://raw.githubusercontent.com/laravel/framework/5.3/CHANGELOG-5.2.md',
				'5.3': 'https://raw.githubusercontent.com/laravel/framework/5.3/CHANGELOG-5.3.md',
				'5.4': 'https://raw.githubusercontent.com/laravel/framework/5.4/CHANGELOG-5.4.md'
			}
		};
	},

	ready: function ()
	{
		this.fetchChangeLogFile();
	},

	watch: {
		version: function ()
		{
			this.fetchChangeLogFile();
		}
	},

	methods:
	{
		/**
		 * Fetch the github raw file.
		 *
		 * @return void
		 */
		fetchChangeLogFile: function ()
		{
			let vm = this;

			this.$http.get(this.getBranch()).then((response) => {
				vm.raw = this.toMarkdown(response.data);
			}, (response) => {
				return 'The branch ' + this.version + ' does not exist!';
			});
		},

		/**
		 * Return the branch under observation.
		 *
		 * @return string
		 */
		getBranch: function ()
		{
			return this.branch[this.version];
		},

		/**
		 * Pipe the github raw file to markdown.
		 *
		 * @param  object response
		 * @return object
		 */
		toMarkdown: function (response)
		{
			let converter = new showdown.Converter();

			return converter.makeHtml(response);
		}
	}
}
</script>