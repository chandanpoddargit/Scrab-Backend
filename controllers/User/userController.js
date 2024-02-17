const User = require("../../models/User.model");
// const Todo = require("../../models/Todo.model");
// const mongoose = require("mongoose");

module.exports = {
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.user._id).select("-password");
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },
  // getDashboard: async (req, res) => {
  //   try {
  //     const userId = req.user._id;

  //     const totalTask = await Todo.find({
  //       userId,
  //     }).countDocuments();

  //     const pendingTask = await Todo.find({
  //       userId,
  //       completed: false,
  //     }).countDocuments();

  //     const targetCounts = await Todo.aggregate([
  //       {
  //         $match: {
  //           userId,
  //           target: { $ne: null, $exists: true },
  //         },
  //       },
  //       {
  //         $group: {
  //           _id: "$target",
  //           count: { $sum: 1 },
  //         },
  //       },
  //     ]);

  //     const targetData = targetCounts.reduce((acc, targetCount) => {
  //       acc.push([targetCount._id, targetCount.count]);
  //       return acc;
  //     }, []);

  //     // Add default values for targets not present in the data
  //     const targets = ["Day", "Weekly", "Monthly", "Yearly", "10 Years"];
  //     targets.forEach((target) => {
  //       const existingData = targetData.find((data) => data[0] === target);
  //       if (!existingData) {
  //         targetData.push([target, 0]);
  //       }
  //     });

  //     const priorityCounts = await Todo.aggregate([
  //       {
  //         $match: {
  //           userId,
  //           priority: { $in: ["High", "Low", "Medium"] },
  //         },
  //       },
  //       {
  //         $group: {
  //           _id: "$priority",
  //           count: { $sum: 1 },
  //         },
  //       },
  //     ]);

  //     const priorityData = priorityCounts.reduce((acc, priorityCount) => {
  //       acc.push([priorityCount._id, priorityCount.count]);
  //       return acc;
  //     }, []);

  //     // Add default values for priorities not present in the data
  //     const priorities = ["High", "Low", "Medium"];
  //     priorities.forEach((priority) => {
  //       const existingData = priorityData.find((data) => data[0] === priority);
  //       if (!existingData) {
  //         priorityData.push([priority, 0]);
  //       }
  //     });

  //     const monthlyCounts = await Todo.aggregate([
  //       {
  //         $match: {
  //           userId,
  //           startDate: { $exists: true },
  //         },
  //       },
  //       {
  //         $group: {
  //           _id: { $month: "$startDate" },
  //           count: { $sum: 1 },
  //         },
  //       },
  //     ]);

  //     const months = [
  //       "Jan",
  //       "Feb",
  //       "Mar",
  //       "Apr",
  //       "May",
  //       "Jun",
  //       "Jul",
  //       "Aug",
  //       "Sep",
  //       "Oct",
  //       "Nov",
  //       "Dec",
  //     ];

  //     const monthlyData = months.map((month) => {
  //       const existingData = monthlyCounts.find(
  //         (data) => data._id === months.indexOf(month) + 1
  //       );
  //       return [month, existingData ? existingData.count : 0];
  //     });
  //     monthlyData.unshift(["Year", "Task"]);
  //     targetData.unshift(["Target", ""]);
  //     priorityData.unshift(["Priority", ""]);
  //     res.status(200).json({
  //       success: true,
  //       totalTask,
  //       pendingTask,
  //       targetData,
  //       priorityData,
  //       monthlyData,
  //     });
  //   } catch (error) {
  //     res.status(400).json({ success: false, error: error.message });
  //   }
  // },
  // getRecentTasks: async (req, res) => {
  //   try {
  //     const tasks = await Todo.find({ userId: req.user._id })
  //       .select("endDate title")
  //       .sort({
  //         endDate: 1,
  //       })
  //       .limit(5);

  //     res.status(200).json({ success: true, data: tasks });
  //   } catch (error) {
  //     res.status(400).json({ success: false, error: error.message });
  //   }
  // },
};
