package com.cs5551.fs16.DayuWang.tutorial8;

import static org.junit.Assert.*;

import org.junit.Test;

public class RandomNumberTest {

	@Test
	public void testRandomNumber() {
		int down = 3;
		int up = 6;
		RandomNumber r = new RandomNumber(3, 6);
		int real = r.Generate();
		System.out.println(down + " <= " + real + " <= " + up);		
	}

	@Test
	public void testGenerate() {
		int down = 3;
		int up = 6;
		RandomNumber r = new RandomNumber(3, 6);
		int real = r.Generate();
		System.out.println(down + " <= " + real + " <= " + up);
		assertEquals((down <= real), true);
		assertEquals((up >= real), true);
	}

}
