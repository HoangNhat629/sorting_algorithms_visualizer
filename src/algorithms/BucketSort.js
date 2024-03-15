import React from "react";
import {
  newTrace,
  addToTrace,
  createKey,
  lastSorted,
  createRange,
} from "./helpers";

const BucketSort = (nums) => {
  const trace = newTrace(nums);
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  const bucketSize = 5;
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;

  // Initialize buckets
  const buckets = Array.from({ length: bucketCount }, () => []);

  // Push elements to respective buckets
  nums.forEach((num) => {
    const bucketIndex = Math.floor((num - min) / bucketSize);
    buckets[bucketIndex].push(num);
    addToTrace(trace, nums, lastSorted(trace), [], [], [], [], [bucketIndex]);
  });

  // Sort each bucket and merge
  let currentIndex = 0;
  buckets.forEach((bucket, bucketIndex) => {
    // Visualize: Sorting current bucket
    addToTrace(trace, nums, lastSorted(trace), [], [], [], [], [bucketIndex]);
    bucket.sort((a, b) => a - b);
    bucket.forEach((num) => {
      // Visualize: Moving elements from bucket to nums array
      addToTrace(
        trace,
        nums,
        lastSorted(trace),
        [],
        [],
        [],
        [],
        [],
        [currentIndex]
      );
      nums[currentIndex++] = num;
    });
  });

  // Visualize: Final sorted array
  addToTrace(trace, nums, createRange(0, nums.length));
  return trace;
};
export const BucketSortKey = createKey(
  "Comparing",
  "Swapping",
  "Overwrite from memory",
  "Less than pivot"
);
export const BucketSortDesc = {
  title: "Bucket Sort",
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Bucket_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bucket Sort
      </a>{" "}
      or <b>bin sort</b>, is a sorting algorithm that works by distributing the
      elements of an array into a number of buckets. Each bucket is then sorted
      individually, either using a different sorting algorithm, or by
      recursively applying the bucket sorting algorithm. It is a distribution
      sort, a generalization of pigeonhole sort that allows multiple keys per
      bucket, and is a cousin of radix sort in the most-to-least significant
      digit flavor. Bucket sort can be implemented with comparisons and
      therefore can also be considered a comparison sort algorithm. The
      computational complexity depends on the algorithm used to sort each
      bucket, the number of buckets to use, and whether the input is uniformly
      distributed.
    </p>
  ),
  worstCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(n + n<sup>2</sup>/k + k)
    </span>
  ),
  bestCase: <span>O(k)</span>,
  space: <span>O(n + k)</span>,
};
export default BucketSort;
