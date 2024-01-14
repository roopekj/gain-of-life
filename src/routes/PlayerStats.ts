export class PlayerStats {
	maxPoints: number;
	workedPoints: number;
	giftedPoints: number;
	workFrequency: number;
	workAmount: number;
	forgetAmount: number;
	master: boolean;
	stop: boolean;

	constructor({
		maxPoints = 30,
		workedPoints = 0,
		giftedPoints = 1,
		workFrequency = 1000,
		workAmount = 0.1,
		forgetAmount = 0.001,
		master = false,
		stop = false
	} = {}) {
		this.maxPoints = maxPoints;
		this.workedPoints = workedPoints;
		this.giftedPoints = giftedPoints;
		this.workFrequency = workFrequency;
		this.workAmount = workAmount;
		this.forgetAmount = forgetAmount;
		this.master = master;
		this.stop = stop;
	}

	setStats({
		workedPoints,
		maxPoints,
		giftedPoints,
		workFrequency,
		workAmount,
		forgetAmount
	}: {
		workedPoints?: number;
		maxPoints?: number;
		giftedPoints?: number;
		workFrequency?: number;
		workAmount?: number;
		forgetAmount?: number;
	}) {
		this.workedPoints = typeof workedPoints != 'undefined' ? workedPoints : this.workedPoints;
		this.maxPoints = typeof maxPoints != 'undefined' ? maxPoints : this.maxPoints;
		this.giftedPoints = typeof giftedPoints != 'undefined' ? giftedPoints : this.giftedPoints;
		this.workFrequency = typeof workedPoints != 'undefined' ? workFrequency : this.workFrequency;
		this.workAmount = typeof workAmount != 'undefined' ? workAmount : this.workAmount;
		this.forgetAmount = typeof forgetAmount != 'undefined' ? forgetAmount : this.forgetAmount;
	}

	currentPoints() {
		return this.giftedPoints + this.workedPoints;
	}

	forget() {
		if (this.stop) return;

		this.workedPoints = Math.max(0, this.workedPoints - this.forgetAmount);
	}

	work() {
		if (this.stop) return;

		this.workedPoints = Math.min(
			this.maxPoints - this.giftedPoints,
			this.workedPoints + this.workAmount
		);
	}

	reset() {
		this.workedPoints = 0;
		this.master = false;
	}
}
