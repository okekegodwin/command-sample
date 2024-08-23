#!/usr/bin/env node

import { program } from "commander";

const list = () => {
  console.log("All the task in my TODO");
}

const add = (task) => {
  console.log(`Add ${task} to tasks for today`);
}

program
  .command("list")
  .description("List all the TODO task")
  .action(list)

program
  .command("add <task>")
  .description("Adds to the list of tasks")
  .action(add)



// marks an item as done
program.parse()