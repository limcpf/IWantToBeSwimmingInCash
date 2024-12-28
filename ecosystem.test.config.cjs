module.exports = {
	apps: [
		{
			name: "candle-save-test",
			script: "./src/services/candle-save/index.ts",
			instances: 1,
			exec_mode: "fork",
			watch: false,
			reload: false,
			max_memory_restart: "300M",
			env: {
				NODE_ENV: "development",
				TZ: "Asia/Seoul",
			},
			exp_backoff_restart_delay: 100,
			max_restarts: 3,
			autorestart: false,
			merge_logs: true,
			error_file: "logs/test/candle-save-error.log",
			out_file: "logs/test/candle-save-out.log",
		},
	],
	watch: ["src/pm2-events.ts"],
	ignore_watch: ["node_modules", "logs"],
	instance_var: "INSTANCE_ID",
	pmx: true,
};