import {
    exec
  } from '../assets/kernelsu/index.js';
import webConfig from '../web.config.js'

export const getMiuiExtmDmOptTotalWriteBack = () => {
	const shellCommon = `echo $(awk '{print int($3 * 4096 / 1024 / 1024)}' /sys/block/zram0/bd_stat)`;
	return new Promise(async (resolve, reject) => {
		if (webConfig.env === 'dev') {
			resolve(`5653`);
		} else {
			const { errno, stdout, stderr } = (await exec(shellCommon));
			errno ? reject(stderr) : resolve(stdout);
		}
	})
}

export const getMiuiExtmDmOptTotalRead = () => {
	const shellCommon = `echo $(awk '{print int($2 * 4096 / 1024 / 1024)}' /sys/block/zram0/bd_stat)`;
	return new Promise(async (resolve, reject) => {
		if (webConfig.env === 'dev') {
			resolve(`1503`);
		} else {
			const { errno, stdout, stderr } = (await exec(shellCommon))
			errno ? reject(stderr) : resolve(stdout);
		}
	})
}

export const getMiuiExtmDmOptHasWriteBack = () => {
	const shellCommon = `echo $(awk '{print int($1 * 4096 / 1024 / 1024)}' /sys/block/zram0/bd_stat)`;
	return new Promise(async (resolve, reject) => {
		if (webConfig.env === 'dev') {
			resolve(`2047`);
		} else {
			const { errno, stdout, stderr } = (await exec(shellCommon))
			errno ? reject(stderr) : resolve(stdout);
		}
	})
}

export const getBackingDev = () => {
	const shellCommon = `cat /sys/block/zram0/backing_dev`;
	return new Promise(async (resolve, reject) => {
		if (webConfig.env === 'dev') {
			resolve(`/dev/block/dm-56`);
		} else {
			const { errno, stdout, stderr } = (await exec(shellCommon));
			errno ? reject(stderr) : resolve(stdout);
		}
	})
}

export const getMiuiExtmDmOptEnable = () => {
	const shellCommon = `getprop persist.miui.extm.dm_opt.enable`;
	return 	new Promise(async (resolve, reject) => {
		if (webConfig.env === 'dev') {
			resolve(`true`);
		} else {
			const { errno, stdout, stderr } = (await exec(shellCommon))
			errno ? reject(stderr) : resolve(stdout);
		}
	})
}
