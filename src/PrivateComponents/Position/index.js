import React, { Component } from 'react';

export default class Position extends Component {
    constructor(props){
        super(props)
        this.state ={
            employeeid: "",
            password: ""
        }
    }

    render(){
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header card-header-primary" style={{backgroundColor:"royalblue"}}>
                                <h4 className="card-title">Edit Profile</h4>
                                <p className="card-category">Complete your profile</p>
                                </div>
                                <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Email address</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div> 
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Email address</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div> 
                                    </div>
                                    <button type="submit" className="btn btn-primary pull-right">Update Profile</button>
                                    <div className="clearfix"></div>
                                </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header card-header-primary" style={{backgroundColor:"royalblue"}}>
                                <h4 className="card-title">Edit Profile</h4>
                                <p className="card-category">Complete your profile</p>
                                </div>
                                <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Email address</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div> 
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">Email address</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div> 
                                    </div>
                                    <button type="submit" className="btn btn-primary pull-right">Update Profile</button>
                                    <div className="clearfix"></div>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}