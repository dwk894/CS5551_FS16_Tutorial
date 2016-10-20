package com.cs5551.fs16.DayuWang.tutorial8;

import java.util.ArrayList;

public class MatrixMultiplicationAlgorithm {
	
	public static int Solution(int[] dimensions) {
		int num = dimensions.length - 1;
		int t[][] = new int[num + 1][num + 1];
		int j, q;
		for (int i = 1; i <= num; i++) {
			t[i][i] = 0;
		}
		for (int l = 2; l <= num; l++) {
			for (int i = 1; i <= num - l + 1; i++) {
				j = i + l - 1;
				t[i][j] = Integer.MAX_VALUE;
				for (int k = i; k <= j - 1; k++) {
					q = t[i][k] + t[k + 1][j] + dimensions[i - 1] * dimensions[k] * dimensions[j];
					if (q < t[i][j]) {
						t[i][j] = q;
					}
				}
			}
		}
		
		return t[1][num];
	}
	
	public static void main(String[] args) {
		int[] p = {10, 5, 6, 5, 5, 5, 10};
		System.out.println("Correct answer is: " + Solution(p));
	}
}
