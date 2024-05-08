import { Form, Formik, Field } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQueryClient } from 'react-query'
import axios from 'axios'
import { FormErrors, TagsInput } from '../components'
import { useArticleQuery } from '../hooks'
import * as Yup from 'yup';
import Product from '../models/Product'


function CreateProduct() {
  const navigate = useNavigate()
  const articleQuery = useArticleQuery()
  const queryClient = useQueryClient()
  const article = articleQuery?.data?.article || {}
  const { slug } = article

  const schema = Yup.object().shape({
    title: Yup.string().required('Required'),
    });

  async function onSubmit(values, { setErrors }) {
    
    try {
      const { data } = await axios.post(`https://dummyjson.com/products/add`, { ...values })

        queryClient.invalidateQueries('https://dummyjson.com/products/add')      

        console.log(data)
       //navigate(`/article/${data?.article?.slug}`)
    } catch (error) {
        console.log(error);
      const { status, data } = error.response

      if (status === 422) {
        setErrors(data.errors)
      }
    }
  }

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <Formik
              enableReinitialize
              onSubmit={onSubmit}
              initialValues={{
                title: '',
                description: '',              
              }}              
              validationSchema={schema}
            >
              {({ isSubmitting, errors, touched }) => (
                <>
                 
                  <Form>
                    <fieldset disabled={isSubmitting}>                      
                      <fieldset className="form-group">                        
                        <Field                          
                          name="title"
                          type="text"
                          className="form-control"
                          placeholder="Title"
                        />
                            {errors.title && touched.title ? (
                            <div className='error'>{errors.title}</div>
                            ) : null}
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="description"
                          type="text"
                          className="form-control"
                          placeholder="Description"
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="price"
                          type="number"
                          className="form-control"
                          placeholder="Price"
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="discountPercentage"
                          type="number"
                          className="form-control"
                          placeholder="Discount Percentage"
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="rating"
                          type="number"
                          className="form-control"
                          placeholder="Rating"
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="stock"
                          type="number"
                          className="form-control"
                          placeholder="Stock"
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="brand"
                          type="text"
                          className="form-control"
                          placeholder="Brand"
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="category"
                          type="text"
                          className="form-control"
                          placeholder="Category"
                        />
                      </fieldset>
                     
                      <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
                        Create Product
                      </button>
                    </fieldset>
                  </Form>
                 
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct
