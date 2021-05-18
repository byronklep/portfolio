import asyncHandler from 'express-async-handler'
import Project from '../models/projectModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProjects = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1
  const keyword = req.query.keyword
    ? {
        title: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Project.countDocuments({ ...keyword })
  const projects = await Project.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ projects, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getFourProjects = asyncHandler(async (req, res) => {
  const pageSize = 4
  const page = Number(req.query.pageNumber) || 1
  const keyword = req.query.keyword
    ? {
        title: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Project.countDocuments({ ...keyword })
  const projects = await Project.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ projects, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id)

  if (project) {
    res.json(project)
  } else {
    res.status(404)
    throw new Error('Project not found')
  }
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id)

  if (project) {
    await project.remove()
    res.json({ message: 'Project removed' })
  } else {
    res.status(404)
    throw new Error('Project not found')
  }
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
// const createProject = asyncHandler(async (req, res) => {
//   const project = new Project({
//     name: 'Sample name',
//     price: 0,
//     user: req.user._id,
//     image: '/images/sample.jpg',
//     brand: 'Sample brand',
//     category: 'Sample category',
//     countInStock: 0,
//     numReviews: 0,
//     description: 'Sample description',
//   })

//   const createdProduct = await product.save()
//   res.status(201).json(createdProduct)
// })

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
// const updateProduct = asyncHandler(async (req, res) => {
//   const {
//     name,
//     price,
//     description,
//     image,
//     brand,
//     category,
//     countInStock,
//   } = req.body

//   const product = await Product.findById(req.params.id)

//   if (product) {
//     product.name = name
//     product.price = price
//     product.description = description
//     product.image = image
//     product.brand = brand
//     product.category = category
//     product.countInStock = countInStock

//     const updatedProduct = await product.save()
//     res.json(updatedProduct)
//   } else {
//     res.status(404)
//     throw new Error('Product not found')
//   }
// })

export {
  getProjects,
  getProjectById,
  deleteProject,
  getFourProjects,
  // createProject,
  // updateProject,
}
