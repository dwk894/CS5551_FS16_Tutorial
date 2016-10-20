package com.cs5551.fs16.DayuWang.tutorial8;

import static org.junit.Assert.*;

import java.util.Arrays;

import org.junit.Test;

public class MatrixMultiplicationAlgorithmTest {

	@Test
	public void testSolution() {
		MatrixMultiplicationAlgorithm chain = new MatrixMultiplicationAlgorithm();
		int[] testCase = {7, 10, 5, 16, 9, 22};
		int realAnswer = chain.Solution(testCase);
		int testrealAnswer = 2771;
	}

	@Test
	public void testMain() {
		int[] testCase = {7, 10, 5, 16, 9, 22};
		System.out.println("@Test solution(): " + Arrays.toString(testCase));
		int result = new MatrixMultiplicationAlgorithm().Solution(testCase);
		System.out.println("@result: " + " = " + "2771");
		assertEquals(result, 2771);
	}

}
