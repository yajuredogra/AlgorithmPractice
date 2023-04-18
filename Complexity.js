/* https://www.bigocheatsheet.com/



O(n) = (linear time) => same amount of time as input
O(1) = (constant time) => same amount of time.. no matter the number of input
O(log(n)) =(logarithmic time)=>  doubling the number don't double the amount of work. like search
O(n log(n)) = (quasilinear time) => increase input by 1 will increase the amount of work by 1+ a little bit
O(n^2) = (Quadratic time)  =>  1 input increase will increase amount of time by multiple of current data
2^n = (Exponential time) => 1 input will increase amount of time by double


                                                Common Data Structure Operations
                                        Data Structure	Time Complexity	Space Complexity
                        Average	                                            Worst	                                                Worst
                        Access      Search	    Insertion	    Deletion	Access	    Search	    Insertion	    Deletion	
Array	                Θ(1)	    Θ(n)	    Θ(n)	        Θ(n)	    O(1)	    O(n)	    O(n)	        O(n)	        O(n)
Stack	                Θ(n)	    Θ(n)	    Θ(1)	        Θ(1)	    O(n)	    O(n)	    O(1)	        O(1)	        O(n)
Queue	                Θ(n)	    Θ(n)	    Θ(1)	        Θ(1)	    O(n)	    O(n)	    O(1)	        O(1)	        O(n)
Singly-Linked List	    Θ(n)	    Θ(n)	    Θ(1)	        Θ(1)	    O(n)	    O(n)	    O(1)	        O(1)	        O(n)
Doubly-Linked List	    Θ(n)	    Θ(n)	    Θ(1)	        Θ(1)	    O(n)	    O(n)	    O(1)	        O(1)	        O(n)
Skip List	            Θ(log(n))	Θ(log(n))	Θ(log(n))	    Θ(log(n))	O(n)	    O(n)	    O(n)	        O(n)	        O(n log(n))
Hash Table	            N/A	        Θ(1)	    Θ(1)	        Θ(1)	    N/A	        O(n)	    O(n)	        O(n)	        O(n)
Binary Search Tree	    Θ(log(n))	Θ(log(n))	Θ(log(n))	    Θ(log(n))	O(n)	    O(n)	    O(n)	        O(n)	        O(n)
Cartesian Tree	        N/A	        Θ(log(n))	Θ(log(n))	    Θ(log(n))	N/A	        O(n)	    O(n)	        O(n)	        O(n)
B-Tree	                Θ(log(n))	Θ(log(n))	Θ(log(n))	    Θ(log(n))	O(log(n))	O(log(n))	O(log(n))	    O(log(n))	    O(n)
Red-Black Tree	        Θ(log(n))	Θ(log(n))	Θ(log(n))	    Θ(log(n))	O(log(n))	O(log(n))	O(log(n))	    O(log(n))	    O(n)
Splay Tree	            N/A	        Θ(log(n))	Θ(log(n))	    Θ(log(n))	N/A	        O(log(n))	O(log(n))	    O(log(n))	    O(n)
AVL Tree	            Θ(log(n))	Θ(log(n))	Θ(log(n))	    Θ(log(n))	O(log(n))	O(log(n))	O(log(n))	    O(log(n))	    O(n)
KD Tree	                Θ(log(n))	Θ(log(n))	Θ(log(n))	    Θ(log(n))	O(n)	    O(n)	    O(n)	        O(n)	        O(n)


            Array Sorting Algorithms
Algorithm	Time Complexity	                                Space Complexity
                Best	        Average	        Worst	        Worst
Quicksort	    Ω(n log(n))	    Θ(n log(n))	    O(n^2)	        O(log(n))
Mergesort	    Ω(n log(n))	    Θ(n log(n))	    O(n log(n))	    O(n)
Timsort	        Ω(n)	        Θ(n log(n))	    O(n log(n))	    O(n)
Heapsort	    Ω(n log(n))	    Θ(n log(n))	    O(n log(n))	    O(1)
Bubble Sort	    Ω(n)	        Θ(n^2)	        O(n^2)	        O(1)
Insertion Sort	Ω(n)	        Θ(n^2)	        O(n^2)	        O(1)
Selection Sort	Ω(n^2)	        Θ(n^2)	        O(n^2)	        O(1)
Tree Sort	    Ω(n log(n))	    Θ(n log(n))	    O(n^2)	        O(n)
Shell Sort	    Ω(n log(n))	    Θ(n(log(n))^2)	O(n(log(n))^2)	O(1)
Bucket Sort	    Ω(n+k)	        Θ(n+k)	        O(n^2)	        O(n)
Radix Sort	    Ω(nk)	        Θ(nk)	        O(nk)	        O(n+k)
Counting Sort	Ω(n+k)	        Θ(n+k)	        O(n+k)	        O(k)
Cubesort	    Ω(n)	        Θ(n log(n))	    O(n log(n))	    O(n)

*/

/*
Tips:
Simple for() loop => Linear O(n)
logic iterate through half of data => Linear O(n)
iterate through 2 different strings => O(n+k)
2 nested for() loops iterating same string/array => O(n^2)
2 nested for() loops iterating different string/array => O(nk)
Sorting => O(n log(n))
*/