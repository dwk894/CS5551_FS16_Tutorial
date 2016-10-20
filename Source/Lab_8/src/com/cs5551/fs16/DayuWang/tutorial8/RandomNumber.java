package com.cs5551.fs16.DayuWang.tutorial8;

import java.util.Random;

public class RandomNumber {
	private int down;
	private int up;
	
	public RandomNumber(int d, int u) {
		down = d;
		up = u;
	}
	
	public int Generate() {
		Random r = new Random();
		int result = r.nextInt() % (down - up + 1) + down;
		return result;
	}
}