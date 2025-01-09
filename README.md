# React 18+ useEffect Side Effect Warning

This repository demonstrates a common issue encountered when upgrading to React 18 or higher: warnings related to side effects happening during the rendering phase.  Incorrect use of the `useEffect` hook can lead to these warnings and potentially unpredictable behavior.

The `bug.js` file shows code that triggers this warning.  The `bugSolution.js` demonstrates the corrected code.

## Problem
In React 18 and later, React is more strict about where side effects should occur.  Placing side effects directly within the `useEffect` callback, without proper dependency array management can cause this warning. The side effects happen when the component is rendering which is not ideal. 

## Solution
The corrected code moves the side effects into a separate function and then properly handles them.