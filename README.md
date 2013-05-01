ScriptLocator
=============

Locate and return the full path to a script file in a page. 
Useful when using iFrames that create and load scripts dynamically.

How to Use:
1. Add file to the DOM (head, body)
2. Init and call the method directly: ScriptLocator().findScript("findScript");
3. or set variable instance, sLocator = ScriptLocator();
4. and call the method ('findScript') when ready.

What it returns:
{
  found: true,
  filePath: "http://www.domain.com/scripts/scripts.js"
}
